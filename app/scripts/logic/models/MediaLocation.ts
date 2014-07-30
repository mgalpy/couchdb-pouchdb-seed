'use strict';

class MediaLocation {

    pos: number[];

    constructor(pos?: any) {
        if (typeof pos == 'string') {
            this.pos = pos.trim().split(' ');
        }
        else {
            this.pos = pos;
        }
    }

    merge(other: MediaLocation) {
        if (!other || !other.pos) {
            return this;
        }

        var pos: any = other.pos;
        if (typeof pos == 'string') {
            this.pos = pos.trim().split(' ');
        }
        else if (pos) {
            this.pos = pos;
        }

        if (this.pos instanceof Array && this.pos.length == 2 && (typeof this.pos[0] != 'number' || typeof this.pos[1] != 'number')) {
            this.pos[0] = Number(this.pos[0]);
            this.pos[1] = Number(this.pos[1]);
        }

        return this;
    }

    equals(other: MediaLocation) {
        if (Boolean(this) != Boolean(other)) {
            return false;
        }

        if (Boolean(this.pos) != Boolean(other.pos)) {
            return false;
        }

        if (this && this.pos && other && other.pos) {
            var pos: any = other.pos;
            if (typeof pos == 'string') {
                pos = pos.trim().split(' ');
            }

            if (this.pos.length != pos.length) {
                return false;
            }

            for (var i = 0; i < this.pos.length; i++) {
                if (this.pos[i] != pos[i]) {
                    return false;
                }
            }
        }

        return true;
    }
}
