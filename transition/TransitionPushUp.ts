import DisplayObjectContainer from '../../../../vendor/structurejs/ts/display/DisplayObjectContainer';
import DOMElement from '../../../../vendor/structurejs/ts/display/DOMElement';
import BaseTransition from './BaseTransition';
import ITransition from '../interface/ITransition';

class TransitionPushUp extends BaseTransition {

    /**
     * TODO: YUIDoc_comment
     *
     * @class TransitionPushUp
     * @extends BaseTransition
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
     * @overridden BaseTransition.createTransition
     */
    public createTransition(transitionType:string, viewContainer:DisplayObjectContainer, currentView:DOMElement, nextView:DOMElement, duration:number = 0.5):ITransition {
        const varsObject = {
            onStart: this._onStart,
            onStartScope: this,
            onUpdate: this._onProgress,
            onUpdateScope: this,
            onComplete: this._onComplete,
            onCompleteScope: this
        };

        this.transition = new TimelineMax(varsObject);
        this.transition.add(TweenMax.to(currentView.$element, duration, {
            y: -viewContainer.unscaledHeight,
            ease: Expo.easeInOut
        }), 0);
        this.transition.add(TweenMax.from(nextView.$element, duration, {
            y: viewContainer.unscaledHeight,
            ease: Expo.easeInOut
        }), 0);

        return this;
    }

    /**
     * @overridden BaseTransition.createTransition
     */
    public complete():any {
        this.transition.progress(1);

        return super.complete();
    }
}

export default TransitionPushUp;
