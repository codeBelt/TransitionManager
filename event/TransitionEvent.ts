import BaseEvent from '../../../../vendor/structurejs/ts/event/BaseEvent';

/**
 * TODO: YUIDoc_comment
 *
 * @class TransitionEvent
 * @extends BaseEvent
 * @constructor
 **/
class TransitionEvent extends BaseEvent {

    /**
     * TODO: YUIDoc_comment
     *
     * @event START
     * @type {string}
     * @static
     */
    static START:string = 'TransitionEvent.start';

    /**
     * TODO: YUIDoc_comment
     *
     * @event PROGRESS
     * @type {string}
     * @static
     */
    static PROGRESS:string = 'TransitionEvent.progress';

    /**
     * TODO: YUIDoc_comment
     *
     * @event COMPLETE
     * @type {string}
     * @static
     */
    static COMPLETE:string = 'TransitionEvent.complete';

    constructor(type:string, bubbles:boolean = false, cancelable:boolean = false, data:any = null) {
        super(type, bubbles, cancelable, data);
    }

}

export default TransitionEvent;
