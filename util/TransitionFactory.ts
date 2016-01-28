import BaseObject from '../../../../vendor/structurejs/ts/BaseObject';
import DisplayObjectContainer from '../../../../vendor/structurejs/ts/display/DisplayObjectContainer';
import DOMElement from '../../../../vendor/structurejs/ts/display/DOMElement';
import ITransition from '../interface/ITransition';
import TransitionType from '../constant/TransitionType';
import TransitionNone from '../transition/TransitionNone';

/**
 * TODO: YUIDoc_comment
 *
 * @class TransitionFactory
 * @module StructureJS
 * @submodule util
 * @constructor
 * @author Robert S. (www.codeBelt.com)
 */
class TransitionFactory extends BaseObject {
    /**
     * TODO: YUIDoc_comment
     *
     * @property _transitions
     * @type {Object}
     * @protected
     */
    protected _transitions:Object = {};

    constructor() {
        super();

        this.registerTransition(TransitionType.NONE, new TransitionNone());
    }

    /**
     * TODO: YUIDoc_comment
     *
     * @param transitionType {string}
     * @param sectionStage {DisplayObjectContainer}
     * @param currentView {DOMElement}
     * @param nextView {DOMElement}
     * @param duration {number}
     * @returns {ITransition}
     */
    public createTransition(transitionType:string, sectionStage:DisplayObjectContainer, currentView:DOMElement, nextView:DOMElement, duration:number = 0.5):ITransition {
        const concreteFactory:ITransition = this._transitions[transitionType];
        if (concreteFactory == null) {
            throw new Error('[' + this.getQualifiedClassName() + '] Not found factory for type: ' + transitionType);
        }

        return concreteFactory.createTransition(transitionType, sectionStage, currentView, nextView, duration);
    }

    /**
     * The registerTransition method allows you to add custom transitions to the {{#crossLink "TransitionFactory"}}{{/crossLink}}.
     *
     * @method registerTransition
     * @param key {string} The key value for the transition being passed in.
     * @param transitionFactory{ITransition} A transition that implements {{#crossLink "ITransition"}}{{/crossLink}}.
     * @chainable
     * @public
     */
    public registerTransition(key:string, transitionFactory:ITransition):any {
        if (this._transitions.hasOwnProperty(key)) {
            throw new Error('[' + this.getQualifiedClassName() + '] A transition with that key has already been registered.');
        }

        this._transitions[key] = transitionFactory;

        return this;
    }

}

export default new TransitionFactory();// Singleton Class
