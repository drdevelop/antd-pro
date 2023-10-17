class EventEmitter {
  private cbs: { [key: string]: Function[] } = {};

  emit(eventName: string, data: any) {
    const eventCbs = this.cbs[eventName];
    if (!(eventCbs?.length > 0)) return;
    for (let i = 0; i < eventCbs.length; i++) {
      eventCbs[i](data);
    }
  }

  on(eventName: string, cb: Function) {
    if (!this.cbs[eventName]) {
      this.cbs[eventName] = [];
    }
    this.cbs[eventName].push(cb);

    return this.unListen.bind(this, eventName, cb);
  }

  unListen(eventName: string, cb: Function) {
    const eventCbs = this.cbs[eventName];
    if (!(eventCbs?.length > 0)) return;
    const findIndex = eventCbs.findIndex(matchCb => matchCb === cb);
    this.cbs[eventName].splice(findIndex, 1);
  }

  destory() {
    this.cbs = {};
  }
}

export default EventEmitter;
