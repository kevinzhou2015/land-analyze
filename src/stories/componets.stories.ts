import { BrowserModule } from '@angular/platform-browser';
import { LandsService } from '../app/providers/lands.service';
import { BaiduMapModule } from 'angular2-baidu-map';
import { storiesOf } from '@storybook/angular';


import { BaiduMapComponent } from '../app/components/baidu-map/baidu-map.component';
import { HttpClientModule } from '@angular/common/http';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/angular/demo';

storiesOf('Addon|Actions', module)
    .add('Action only', () => ({
        component: Button,
        props: {
            text: 'Action only',
            onClick: action('log 1'),
        },
    }))
    .add('Action and method', () => ({
        component: Button,
        props: {
            text: 'Action and Method',
            onClick: e => {
                console.log(e);
                e.preventDefault();
                action('log2')(e.target);
            },
        },
    }));


storiesOf('Components|baidumap', module)
    .add('baidumap~', () => ({
        template: '<div class="outdiv"> <app-baidu-map></app-baidu-map></div>',
        moduleMetadata: {
            declarations: [BaiduMapComponent],
            imports: [
                BrowserModule,
                HttpClientModule,
                BaiduMapModule.forRoot({ ak: 'PkpV9YHKG1ksnOwGdPLWBUNGBukPCrfn' })],
            providers: [LandsService],
        },
        styles: [
            `
      .outdiv {
        width: 500px;
        height: 500px;
      }
    `,
        ],
    }));
