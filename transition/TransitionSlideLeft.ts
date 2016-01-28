import DisplayObjectContainer from '../../../../vendor/structurejs/ts/display/DisplayObjectContainer';
import DOMElement from '../../../../vendor/structurejs/ts/display/DOMElement';
import BaseTransition from './BaseTransition';
import ITransition from '../interface/ITransition';

/**
 * TODO: YUIDoc_comment
 *
 * @class TransitionSlideLeft
 * @extends BaseTransition
 * @constructor
 **/
class TransitionSlideLeft extends BaseTransition {

    constructor() {
        super();
    }

    /**
     * @overridden BaseTransition.createTransition
     */
    public createTransition(transitionType:string, viewContainer:DisplayObjectContainer, currentView:DOMElement, nextView:DOMElement, duration:number = 0.5):ITransition {
        // Immediately places the next view out of display bounds.
        TweenMax.set(nextView.$element, {xPercent: 100});

        const varsObject = {
            onStart: this._onStart,
            onStartScope: this,
            onUpdate: this._onProgress,
            onUpdateScope: this,
            onComplete: this._onComplete,
            onCompleteScope: this
        };

        this.transition = new TimelineMax(varsObject);
        this.transition.to(nextView.$element, duration, {xPercent: 0, z: 0.01, ease: Power4.easeOut});

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

export default TransitionSlideLeft;
