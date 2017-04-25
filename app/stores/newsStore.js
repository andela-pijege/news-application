import { EventEmitter } from 'events';
import assign from 'object-assign';
import NewsDispatcher from '../dispatcher/NewsDispatcher';
import NewsActionTypes from '../constants/NewsActionTypes';

const CHANGE_EVENT = 'change';
const NewsStore = assign({}, EventEmitter.prototype, {

  news: [],


// Accessor method
  getNews() {
    return this.news;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

});

NewsDispatcher.register((payload) => {
  switch (payload.eventName) {

    case NewsActionTypes.GET_NEWS:
      console.log('news store called');
      console.log(payload);
      NewsStore.news = payload.newsItem;
      NewsStore.emitChange();
      console.log('am at news stores');
      break;
    default:
      return true;
  }
});

export default NewsStore;
