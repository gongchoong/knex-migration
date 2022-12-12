"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const ON_UPDATE_TIMESTAMP_FUNCTION = `
  CREATE OR REPLACE FUNCTION on_update_timestamp()
  RETURNS trigger AS $$
  BEGIN
    NEW."updatedAt" = now();

    IF (NEW.active = false) THEN
      NEW."updatedAt" = OLD."updatedAt";
      NEW."deletedAt" = now();
    END IF;

    RETURN NEW;
  END;
$$ language 'plpgsql';
`;
const DROP_ON_UPDATE_TIMESTAMP_FUNCTION = 'DROP FUNCTION on_update_timestamp';
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.raw(ON_UPDATE_TIMESTAMP_FUNCTION);
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.raw(DROP_ON_UPDATE_TIMESTAMP_FUNCTION);
    });
}
exports.down = down;
//# sourceMappingURL=20210811014810_createOnUpdateTimestamp.js.map