import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage_keys.config";
import { LocalUser } from "../models/local_user";
import { LocalServidor } from "../models/local_servidor";

@Injectable()
export class StorageService {

    getLocalUser() : LocalUser {
        let usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    }

    setLocalUser(obj : LocalUser) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }
        else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }

    getLocalServidor() : LocalServidor {
      let srv = localStorage.getItem(STORAGE_KEYS.localServidor);
      if (srv == null) {
          return null;
      }
      else {
          return JSON.parse(srv);
      }
  }

  setLocalServidor(obj : LocalServidor) {
      if (obj == null) {
          localStorage.removeItem(STORAGE_KEYS.localServidor);
      }
      else {
          localStorage.setItem(STORAGE_KEYS.localServidor, JSON.stringify(obj));
      }
  }

}
