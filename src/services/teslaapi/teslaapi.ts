import { AccessToken, Vehicle } from './datatypes';

export interface TeslaApi {
    login(email: string, password: string): Promise<AccessToken>;
    getVehicles(token: string): Promise<Vehicle[]>;
}

export class TeslaApiImpl implements TeslaApi {
    private readonly url: string;

    constructor(baseUrl: string) {
        this.url = baseUrl;
    }

    async login(email: string, password: string): Promise<AccessToken> {
        const response = await fetch(`${this.url}/oauth/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "grant_type": "password",
                "client_id": "e4a9949fcfa04068f59abb5a658f2bac0a3428e4652315490b659d5ab3f35a9e",
                "client_secret": "c75f14bbadc8bee3a7594412c31416f8300256d7668ea7e6e7f06727bfb9d220",
                "email": email,
                "password": password
            })
        });
        const result = await response.json();
        return result as AccessToken;
    }

    async getVehicles(token: string): Promise<Vehicle[]> {
        const response = await fetch(`${this.url}/api/1/vehicles`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const result = await response.json();
        return result.response as Vehicle[];
    }
}
