import express from 'express';

import { default as mainRouter } from '../routes/main.js';
import { default as adminRouter } from '../routes/admin.js';
import { default as productRouter } from '../routes/product.js';
import { default as userRouter } from '../routes/user.js';

export function routesSetup(app) {
    app.use('/', mainRouter);
    app.use('/', adminRouter);
    app.use('/', productRouter);
    app.use('/', userRouter);
}
