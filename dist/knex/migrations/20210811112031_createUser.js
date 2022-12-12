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
const utils_1 = require("../helpers/utils");
const tableName = 'user';
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex.schema.createTable(tableName, (table) => {
            table.increments('id');
            table.string('firstName', 100).notNullable();
            table.string('lastName', 100).notNullable();
            utils_1.defaultHistoryFields(knex, table);
        });
        yield knex.raw(utils_1.createOnUpdateTrigger(tableName));
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex.raw(utils_1.deleteOnUpdateTrigger(tableName));
        yield knex.schema.dropTable(tableName);
    });
}
exports.down = down;
//# sourceMappingURL=20210811112031_createUser.js.map