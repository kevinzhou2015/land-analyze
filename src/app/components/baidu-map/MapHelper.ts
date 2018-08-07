import { FilterValues } from './../filter-rows/land-filter/land-filter.component';
import { Land } from './../../models/land.model';
declare var BMap;
declare var BMap_Symbol_SHAPE_STAR;
declare var BMap_Symbol_SHAPE_WARNING;
function ComplexCustomOverlay(point, text, mouseoverText) {
    this._point = point;
    this._text = text;
    this._overText = mouseoverText;
}

export function initApartmentMarker(mapInstance: any) {
    ComplexCustomOverlay.prototype = new BMap.Overlay();
    ComplexCustomOverlay.prototype.initialize = function (map) {
        this._map = map;
        const div = this._div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
        div.style.backgroundColor = '#EE5D5B';
        div.style.border = '1px solid #BC3B3A';
        div.style.color = 'white';
        div.style.height = '18px';
        div.style.padding = '2px';
        div.style.lineHeight = '18px';
        div.style.whiteSpace = 'nowrap';
        div.style.msUserSelect = 'none';
        div.style.fontSize = '12px';
        const span = this._span = document.createElement('span');
        div.appendChild(span);
        span.appendChild(document.createTextNode(this._text));
        const that = this;

        const arrow = this._arrow = document.createElement('div');
        arrow.style.background = 'url(/assets/icons/label_arrow.png) no-repeat';
        arrow.style.position = 'absolute';
        arrow.style.width = '11px';
        arrow.style.height = '10px';
        arrow.style.top = '22px';
        arrow.style.left = '10px';
        arrow.style.overflow = 'hidden';
        div.appendChild(arrow);

        div.onmouseover = function () {
            this.style.backgroundColor = '#6BADCA';
            this.style.borderColor = '#0000ff';
            this.getElementsByTagName('span')[0].innerHTML = that._overText;
            arrow.style.backgroundPosition = '0px -20px';
        };

        div.onmouseout = function () {
            this.style.backgroundColor = '#EE5D5B';
            this.style.borderColor = '#BC3B3A';
            this.getElementsByTagName('span')[0].innerHTML = that._text;
            arrow.style.backgroundPosition = '0px 0px';
        };

        mapInstance.getPanes().labelPane.appendChild(div);

        return div;
    };
    ComplexCustomOverlay.prototype.draw = function () {
        const map = this._map;
        const pixel = map.pointToOverlayPixel(this._point);
        this._div.style.left = pixel.x - parseInt(this._arrow.style.left, 10) + 'px';
        this._div.style.top = pixel.y - 30 + 'px';
    };

    return ComplexCustomOverlay;
}


export function addLandMarker(land: Land) {
    const px = land.pathlng;
    const py = land.pathlat;
    const mpx = px.split(';');
    const mpy = py.split(';');
    if (mpx.length > 1) {
        addPolygon(mpx, mpy, land);
    } else {
        addStar(mpy, mpx, land);
    }
}

function addPolygon(mpx: any[], mpy: any[], data: any) {
    const secRing = new Array();
    for (let bn = 0; bn < mpx.length - 1; bn++) {
        secRing[bn] = new BMap.Point(mpy[bn], mpx[bn]);
    }
    const polygon = new BMap.Polygon(secRing,
        { strokeColor: '#FF0000', strokeWeight: 2, strokeOpacity: 0.5, fillColor: '#FF0000', enableClicking: true });
    postToMap(polygon, data);
}

function addStar(mpx: any[], mpy: any[], data: any) {
    addVector(mpx, mpy, data, BMap_Symbol_SHAPE_STAR);
}
export function addSRMarker(mpx: any[], mpy: any[], data: any) {
    const vectorStar = new BMap.Marker(new BMap.Point(mpx, mpy), {
        // 初始化五角星symbol
        icon: new BMap.Symbol(BMap_Symbol_SHAPE_WARNING, {
            scale: 1,
            fillColor: 'red',
            fillOpacity: 0.8
        })
    });
    postToMap(vectorStar, data);
}
function addVector(mpx: any[], mpy: any[], data: any, shape: any) {
    const vectorStar = new BMap.Marker(new BMap.Point(mpx, mpy), {
        // 初始化五角星symbol
        icon: new BMap.Symbol(shape, {
            scale: 1,
            fillColor: 'red',
            fillOpacity: 0.8
        })
    });
    postToMap(vectorStar, data);
}

function postToMap(polygon: any, data: any) {
    polygon.tag = data;
    polygon.addEventListener('click', this.onLandClicked);
    this.map.addOverlay(polygon);
}

export function isMatched(conditiones: any, land: Land) {
    return matchTime(conditiones, land)
        && matchNature(conditiones, land)
        && matchStatus(conditiones, land);
}

function matchTime(conditiones: any, land: Land) {
    let retVal = false;
    conditiones[0]
        .filter(year => year.checked)
        .forEach(year => {
            if (land.transfer_time.toString().substring(0, 4) === year.value) {
                retVal = true;
            }
        });
    return retVal;
}

function matchNature(conditiones: any, land: Land) {
    let retVal = false;
    (conditiones[1] as FilterValues[])
        .filter(nat => nat.checked)
        .forEach(nat => {
            if (nat.value === land.nature_of_land) {
                retVal = true;
            }
        });
    return retVal;
}

function matchStatus(conditiones: any, land: Land) {
    let retVal = false;
    conditiones[2].filter(sta => sta.checked)
        .forEach(sta => {
            if (sta.value === land.owner) {
                retVal = true;
            } else if (sta.value === 'yes' && land.owner !== '--') {
                retVal = true;
            }
        });
    return retVal;
}
