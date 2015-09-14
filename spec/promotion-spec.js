'use strict';

var Promotion = require('../src/promotion.js');

describe('Promotion',function() {
    describe('#promotionPrice',function() {
        it("one different book have no promotion", function() {
            var promotion = new Promotion(8);

            expect(promotion.promotionPrice([[1]])).toBe(8);
        });

        it("two different book have 5% promotion", function() {
            var promotion = new Promotion(8);

            expect(promotion.promotionPrice([[1,2]])).toBe(15.2);
        });


        it("three different book have 10% promotion", function() {
            var promotion = new Promotion(8);

            expect(promotion.promotionPrice([[1,2,3]])).toBe(21.6);
        });

        it("four different book have 20% promotion", function() {
            var promotion = new Promotion(8);

            expect(promotion.promotionPrice([[1,2,3,4]])).toBe(25.6);
        });

        it("five different book have 25% promotion", function() {
            var promotion = new Promotion(8);

            expect(promotion.promotionPrice([[1,2,3,4,5]])).toBe(30);
        });

        it("different group have own promotion", function() {
            var promotion = new Promotion(8);

            expect(promotion.promotionPrice([[1,2,3],[2,3]])).toBe(36.8);
        });

    });

    describe('#special',function(){
        it("should cheaper 0.4 when have the special situation", function() {
            var promotion = new Promotion(8);

            expect(promotion.specialPromotion([[1,2,3],[2,3]])).toBe(36.4);
        });
    });
});
