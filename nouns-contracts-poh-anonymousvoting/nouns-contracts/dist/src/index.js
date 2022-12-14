"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NounsDaoLogicV1Factory = exports.NounsSeederFactory = exports.NounsDescriptorFactory = exports.NounsAuctionHouseFactory = exports.NounsTokenFactory = exports.NounsDAOABI = exports.NounsSeederABI = exports.NounsDescriptorABI = exports.NounsAuctionHouseABI = exports.NounsTokenABI = void 0;
var NounsToken_json_1 = require("../abi/contracts/NounsToken.sol/NounsToken.json");
Object.defineProperty(exports, "NounsTokenABI", { enumerable: true, get: function () { return __importDefault(NounsToken_json_1).default; } });
var NounsAuctionHouse_json_1 = require("../abi/contracts/NounsAuctionHouse.sol/NounsAuctionHouse.json");
Object.defineProperty(exports, "NounsAuctionHouseABI", { enumerable: true, get: function () { return __importDefault(NounsAuctionHouse_json_1).default; } });
var NounsDescriptor_json_1 = require("../abi/contracts/NounsDescriptor.sol/NounsDescriptor.json");
Object.defineProperty(exports, "NounsDescriptorABI", { enumerable: true, get: function () { return __importDefault(NounsDescriptor_json_1).default; } });
var NounsSeeder_json_1 = require("../abi/contracts/NounsSeeder.sol/NounsSeeder.json");
Object.defineProperty(exports, "NounsSeederABI", { enumerable: true, get: function () { return __importDefault(NounsSeeder_json_1).default; } });
var NounsDAOLogicV1_json_1 = require("../abi/contracts/governance/NounsDAOLogicV1.sol/NounsDAOLogicV1.json");
Object.defineProperty(exports, "NounsDAOABI", { enumerable: true, get: function () { return __importDefault(NounsDAOLogicV1_json_1).default; } });
var NounsToken__factory_1 = require("../typechain/factories/contracts/NounsToken__factory");
Object.defineProperty(exports, "NounsTokenFactory", { enumerable: true, get: function () { return NounsToken__factory_1.NounsToken__factory; } });
var NounsAuctionHouse__factory_1 = require("../typechain/factories/contracts/NounsAuctionHouse__factory");
Object.defineProperty(exports, "NounsAuctionHouseFactory", { enumerable: true, get: function () { return NounsAuctionHouse__factory_1.NounsAuctionHouse__factory; } });
var NounsDescriptor__factory_1 = require("../typechain/factories/contracts/NounsDescriptor__factory");
Object.defineProperty(exports, "NounsDescriptorFactory", { enumerable: true, get: function () { return NounsDescriptor__factory_1.NounsDescriptor__factory; } });
var NounsSeeder__factory_1 = require("../typechain/factories/contracts/NounsSeeder__factory");
Object.defineProperty(exports, "NounsSeederFactory", { enumerable: true, get: function () { return NounsSeeder__factory_1.NounsSeeder__factory; } });
var NounsDAOLogicV1__factory_1 = require("../typechain/factories/contracts/governance/NounsDAOLogicV1__factory");
Object.defineProperty(exports, "NounsDaoLogicV1Factory", { enumerable: true, get: function () { return NounsDAOLogicV1__factory_1.NounsDAOLogicV1__factory; } });
