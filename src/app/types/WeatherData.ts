export interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
    };
    weather: [{ icon: string; main: string }];
}