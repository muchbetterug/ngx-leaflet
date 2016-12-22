import { Directive, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

import * as L from 'leaflet';

import { LeafletDirective } from '../core/leaflet.directive';
import { LeafletLayersControlBase } from './leaflet-control-layers.base';


@Directive({
	selector: '[leafletLayersControl]'
})
export class LeafletLayersControlDirective
	extends LeafletLayersControlBase
	implements OnChanges, OnInit {

	// Control Layers Configuration
	@Input('leafletLayersControl') layersControlConfig: any;

	@Input('leafletLayersControlOptions') layersControlOptions: any;


	constructor(leafletDirective: LeafletDirective) {
		super(leafletDirective);
	}

	ngOnInit() {

		// This will initialize the map
		super.ngOnInit();

		// Set up all the initial settings
		this.initializeLayersControl(this.layersControlConfig, this.layersControlOptions);

	}

	ngOnChanges(changes: { [key: string]: SimpleChange }) {

		// Set the layers
		if (changes['layersControlCfg']) {
			this.setLayersControlConfig(
				changes['layersControlCfg'].currentValue,
				changes['layersControlCfg'].previousValue);
		}

	}

}
