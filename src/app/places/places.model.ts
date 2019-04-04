export class Place {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public imageUrl: string,
        public price: number,
        public aviableFrom: Date,
        public aviableTo: Date,
        public userId: string
    ) {}
}
