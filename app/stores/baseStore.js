import { EventEmitter } from 'events';
import NewsDispatcher from '../dispatcher/NewsDispatcher';

const CHANGE_EVENT = 'change';
class BaseStore extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  subscribe(actionSubscribe) {
    this.dispatchToken = NewsDispatcher.register(actionSubscribe());
  }
}

export default BaseStore;
