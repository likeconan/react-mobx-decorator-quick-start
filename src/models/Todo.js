import { observable } from 'mobx';

export default class ToDo {
    id = Math.random()
    @observable title = ''
    @observable finished = false
}