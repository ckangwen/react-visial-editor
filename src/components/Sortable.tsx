/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
/* eslint consistent-return: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import SortableJS from 'sortablejs';

interface storeType {
  [propName: string]: any
}

const store: storeType = {
  nextSibling: null,
  activeComponent: null,
};

const noop = () => {};


class Sortable extends React.Component<any, any> {
  static propTypes = {
    options: PropTypes.object,
    // eslint-disable-next-line react/require-default-props
    onChange: PropTypes.func,
    tag: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    style: PropTypes.object,
  };

  static defaultProps = {
    options: {},
    tag: 'div',
    style: {},
  };

  sortable: any = null;

  node: any;

  componentDidMount() {
    const options = { ...this.props.options };

    [
      'onChoose',
      'onStart',
      'onEnd',
      'onAdd',
      'onUpdate',
      'onSort',
      'onRemove',
      'onFilter',
      'onMove',
      'onClone',
    ].forEach((name) => {
      const eventHandler = options[name];

      options[name] = (...params: any) => {
        const [evt] = params;

        if (name === 'onChoose') {
          store.nextSibling = evt.item.nextElementSibling;
          store.activeComponent = this;
        } else if ((name === 'onAdd' || name === 'onUpdate') && this.props.onChange) {
          const items = this.sortable.toArray();
          const remote = store.activeComponent;
          const remoteItems = remote.sortable.toArray();
          // console.log(items, remoteItems)

          const referenceNode = (store.nextSibling && store.nextSibling.parentNode !== null)
            ? store.nextSibling
            : null;
          evt.from.insertBefore(evt.item, referenceNode);

          if (remote !== this) {
            const remoteOptions = remote.props.options || {};

            if ((typeof remoteOptions.group === 'object') && (remoteOptions.group.pull === 'clone')) {
              // Remove the node with the same data-reactid
              evt.item.parentNode.removeChild(evt.item);
            }

            remote.props.onChange && remote.props.onChange(remoteItems, remote.sortable, evt);
          }

          this.props.onChange && this.props.onChange(items, this.sortable, evt);
        }

        if (evt.type === 'move') {

          const [originalEvent] = params;
          // const [evt, originalEvent] = params;
          const e = params.evt;
          const canMove = eventHandler ? eventHandler(e, originalEvent) : true;
          return canMove;

        }

        setTimeout(() => {
          eventHandler && eventHandler(evt);
        }, 0);
      };
    });


    this.sortable = SortableJS.create(this.node, options);
  }

  shouldComponentUpdate(nextProps: any) {
    // If onChange is null, it is an UnControlled component
    // Don't let React re-render it by setting return to false
    if (!nextProps.onChange) {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    if (this.sortable) {
      this.sortable.destroy();
      this.sortable = null;
    }
  }

  render() {
    const {
      tag: Component,
      options, // eslint-disable-line
      onChange, // eslint-disable-line
      ...props
    } = this.props;

    return (
      <Component
        {...props}
        ref={(node: any) => {
          this.node = node;
        }}
      >
        { this.props.children }
      </Component>
    );
  }
}

export default Sortable;
