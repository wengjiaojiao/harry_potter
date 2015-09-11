'use strict';

var Promotion = require('../src/promotion.js');

describe('Promotion',function() {
    it("should have method differentPromotion, one different book have no promotion", function() {
        var promotion = new Promotion(8);

        expect(promotion.differentPromotion([[1]])).toBe(8);
    });

    it("should have method differentPromotion, two different book have 5% promotion", function() {
        var promotion = new Promotion(8);

        expect(promotion.differentPromotion([[1,2]])).toBe(15.2);
    });


    it("should have method differentPromotion, three different book have 10% promotion", function() {
        var promotion = new Promotion(8);

        expect(promotion.differentPromotion([[1,2,3]])).toBe(21.6);
    });

    it("should have method differentPromotion, four different book have 20% promotion", function() {
        var promotion = new Promotion(8);

        expect(promotion.differentPromotion([[1,2,3,4]])).toBe(25.6);
    });

    it("should have method differentPromotion, five different book have 25% promotion", function() {
        var promotion = new Promotion(8);

        expect(promotion.differentPromotion([[1,2,3,4,5]])).toBe(30);
    });

    it("should have method differentPromotion, different group have own promotion", function() {
        var promotion = new Promotion(8);

        expect(promotion.differentPromotion([[1,2,3],[2,3]])).toBe(36.8);
    });
});
