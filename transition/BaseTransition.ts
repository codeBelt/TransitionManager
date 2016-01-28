import EventDispatcher from '../../../../vendor/structurejs/ts/event/EventDispatcher';
import DisplayObjectContainer from '../../../../vendor/structurejs/ts/display/DisplayObjectContainer';
import DOMElement from '../../../../vendor/structurejs/ts/display/DOMElement';
import TransitionEvent from '../event/TransitionEvent';
import ITransition from '../interface/ITransition';

class BaseTransition extends EventDispatcher implements ITransition {

    /**
     * Property of the transition object.
     *
     * @property transition
     * @type {any}
     * @readOnly
     */
    public transition:any = null;

    /**
     * TODO: YUIDoc_comment
     *
     * @class BaseTransition
     * @extends EventDispatcher
     * @module StructureJS
     * @submodule controller
     * @constructor
     * @author Robert S. (www.codeBelt.com)
     * @version 0.1.0
     */
    constructor() {
        super();
    }

    /**
     * Creates and starts the transition for the specific transition type.
     *
     * @method createTransition
     * @param transitionType {string)
     * @param viewContainer {DisplayObjectContainer)
     * @param currentView {DOMElement)
     * @param nextView {DOMElement)
     * @param [duration=0.5] {number)
     * @returns {ITransition}
     * @public
     * @chainable
     */
    public createTransition(transitionType:string, viewContainer:DisplayObjectContainer, currentView:DOMElement, nextView:DOMElement, duration:number = 0.5):ITransition {
        return this;
    }

    /**
     * Tells transition to finishes/complete the transition right away.
     *
     * @method complete
     * @returns {BaseTransition}
     * @chainable
     */
    public complete():any {
        return this;
    }

    /**
     * @overridden EventDispatcher.destroy
     */
    public destroy():void {
        this.complete();

        super.destroy();
    }

    /**
     * Gets called by the transition object when the transition starts. Dispatches the TransitionEvent.START event.
     * The data value of the TransitionEvent event is set to the transition object.
     *
     * @method _onStart
     * @returns {BaseTransition}
     * @protected
     * @chainable
     */
    protected _onStart():any {
        this.dispatchEvent(new TransitionEvent(TransitionEvent.START, false, false, this.transition));

        return this;
    }

    /**
     * Gets called by the transition object every time the timeline updates (on every frame while the timeline is active).
     * Dispatches the TransitionEvent.START event. The data value of the TransitionEvent event is set to the transition object.
     *
     * @method _onProgress
     * @returns {BaseTransition}
     * @protected
     * @chainable
     */
    public _onProgress():any {
        this.dispatchEvent(new TransitionEvent(TransitionEvent.PROGRESS, false, false, this.transition));

        return this;
    }

    /**
     * Gets called by the transition object when the transition completes. Dispatches the TransitionEvent.COMPLETE event.
     * The data value of the TransitionEvent event is set to the transition object.
     *
     * @method _onComplete
     * @returns {BaseTransition}
     * @protected
     * @chainable
     */
    protected _onComplete():any {
        this.dispatchEvent(new TransitionEvent(TransitionEvent.COMPLETE, false, false, this.transition));

        return this;
    }

}

export default BaseTransition;
