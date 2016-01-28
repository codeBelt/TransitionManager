import DisplayObjectContainer from '../../../../vendor/structurejs/ts/display/DisplayObjectContainer';
import DOMElement from '../../../../vendor/structurejs/ts/display/DOMElement';
import BaseTransition from './BaseTransition';
import ITransition from '../interface/ITransition';

class TransitionNone extends BaseTransition {

    /**
     * TODO: YUIDoc_comment
     *
     * @class TransitionNone
     * @extends BaseTransition
     * @module StructureJS
     * @submodule controller
     * @constructor
     * @author Robert S. (www.codeBelt.com)
     */
    constructor() {
        super();
    }

    /**
     * @overridden BaseTransition.createTransition
     */
    public createTransition(transitionType:string, viewContainer:DisplayObjectContainer, currentView:DOMElement, nextView:DOMElement, duration:number = 0):ITransition {
        // Needs a setTimeout because the events would fire before the addEventListener had time to be setup on the Transition object.
        setTimeout(() => {
            // Calls all event methods right way so the current view can be removed and the next view will added. This transition is just a swap of views.
            this._onStart();
            this._onProgress();
            this._onComplete();
        }, 100);

        return this;
    }

}

export default TransitionNone;
