"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express =require('express')
const express_1 = __importStar(require("express")); //added json for purposes of middleware importing, intervenes a request an continues
const ProductsRoutes_1 = __importDefault(require("./Routes/ProductsRoutes"));
const app = (0, express_1.default)();
app.use((0, express_1.json)());
app.use('/Products', ProductsRoutes_1.default);
app.listen(4000, () => {
    console.log('Server Running');
});
//http://localhost:4000/todo
//npm i -g nodemon
//npm init - initialize this as a node working directory
//package.json- has start scripts and lidt of dependencies used in the project
// tsc --init  - creats a ts config file
//all ts code will be in src folder , all Js code will be in dist folder
// package.lock.json -version (first npm i ....)
//node modules -this is where the dowloaded library is stored
//git-ignore (nodemodules-(npm i /npm install) /dist (tsc -w))
// @types/... originally all the libraries were written in Javascript
// we dont have the types
//and to work with typescript we require the types
// @types  to install the types of the libraries and we can now work with typescript fully
