export interface AccessToken {
    access_token: string;
    created_at: number;
    expires_in: number;
    refresh_token: string;
    token_type: string;
}

export interface Vehicle {
    id: number;
    vehicle_id: number;
    vin: string;
    display_name: string;
    option_codes: string;
    color: string | null;
    tokens: string[];
    state: string;
    in_service: boolean;
    id_s: string;
    calendar_enabled: boolean;
    api_version: number;
    backseat_token: string | null;
    backseat_token_updated_at: string | null;
}
