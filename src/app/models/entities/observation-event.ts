//BEGIN LICENSE BLOCK 
//Interneuron Terminus

//Copyright(C) 2022  Interneuron CIC

//This program is free software: you can redistribute it and/or modify
//it under the terms of the GNU General Public License as published by
//the Free Software Foundation, either version 3 of the License, or
//(at your option) any later version.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

//See the
//GNU General Public License for more details.

//You should have received a copy of the GNU General Public License
//along with this program.If not, see<http://www.gnu.org/licenses/>.
//END LICENSE BLOCK 
import { EntityBase } from "./entity-base.model";

export interface  ObservationEvent extends EntityBase {
  observationevent_id: string;
	person_id: string;
	datestarted: any;
	datefinished: any;
	addedby: string;
	encounter_id: string;
	isamended: Boolean;
	observationfrequency: Number;
	observationscaletype_id: string;
	escalationofcare: Boolean;
	reasonforamend: string;
	reasonfordelete: string;
	reasonforincompleteobservations: string;
	eventcorrelationid: string;
	incomplete: Boolean;
}

