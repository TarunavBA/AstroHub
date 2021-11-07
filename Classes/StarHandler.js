import React from 'react';

let starsdb = []

export default class StarHandler {
  constructor(starObject, polarFunction) {
    this.datetimedata = new Date()
    this.starObject = starObject;
    this.polarFunction = polarFunction;
  }
  update() {
    this.datetimedata = new Date().toJson();
  }
}
