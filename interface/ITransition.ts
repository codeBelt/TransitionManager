import DisplayObjectContainer from '../../../../vendor/structurejs/ts/display/DisplayObjectContainer';
import DOMElement from '../../../../vendor/structurejs/ts/display/DOMElement';
import IEventDispatcher from '../../../../vendor/structurejs/ts/interface/IEventDispatcher';

/**
 * TODO: YUIDoc_comment
 *
 * @class ITransition
 * @constructor
 * @author Robert S. (www.codeBelt.com)
 */
interface ITransition extends IEventDispatcher {
    createTransition(transitionType:string, sectionStage:DisplayObjectContainer, currentView:DOMElement, nextView:DOMElement, duration?:number):ITransition;
    complete():any;
}

export default ITransition;
