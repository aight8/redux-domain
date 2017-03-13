import Domain from '../Domain'
import { createSelectorCreator, createSelector, Selector, defaultMemoize } from 'reselect'

type SmartInputSelector<Context> = (this: Context, state, props: any) => any;
type SmartInputSelectors<Context> = SmartInputSelector<Context>[];

export default function<DomainT extends Domain<any>>
  (contextualInputSelectors: SmartInputSelectors<DomainT>, combiner: Function)
{
  return function(target: DomainT, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(props: any) {
        if (!(this.__selectors instanceof Object)) {
            this.__selectors = {};
        }
        if (!this.__selectors[key]) {
            let inputSelectorsOriginal = contextualInputSelectors.map(contextualInputSelector => {
                return (state: any, props: any) => {
                    return contextualInputSelector.call(this, props);
                }
            });
            this.__selectors[key] = (createSelector as any)(inputSelectorsOriginal, combiner);
        }
        return this.__selectors[key](null, props);
    }

    return descriptor;
  }
}

/*
@reselect<DomainA>(
        [
            function(props) {
                return 111 + props.ids.join('-');
            },
            function(props) {
                return 222 + props.ids.join('-');
            },
            function(props) {
                return 333 + props.ids.join('-');
            }
        ],
        (a, b, c) => {
            console.log('combiner executed');
            return {
                a,
                b,
                c,
            };
        }
    )
    getAvgAge(props: any) { // ids: number[]
        return ({} as any);
    }
*/