
import express from 'express';

export function indexController(req, res) {
    res.render('index');
};

export function aboutController(req, res) {
    res.render('about');
};
