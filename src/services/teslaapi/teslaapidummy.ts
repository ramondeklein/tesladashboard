import { AccessToken, Vehicle } from "./datatypes";
import { TeslaApi } from "./teslaapi";

export class TeslaApiDummy implements TeslaApi {
    public async login(email: string, password: string): Promise<AccessToken> {
        return {
            access_token: "dummy",
            created_at: 1545213131,
            expires_in: 3888000,
            refresh_token: "dummy",
            token_type: "dummy",
        };
    }

    public async getVehicles(token: string): Promise<Vehicle[]> {
        const dummyVehicle: Vehicle = {
            id: 2016457438912345,
            vehicle_id: 526634123,
            vin: "5YJSA7E24JF123456",
            display_name: "Dummy Tesla",
            option_codes: "REEU,ADPX2,ADX4,ADX6,ADX7,ADX8,AF02,APF1,APH3,APPB,AU01,BCMB,BP00,BR00,BS00,BTX5,CDM0,CF00,CH04,PMBL,CW02,DCF0,DRLH,DSHG,DU00,DV4W,FG02,FMP6,FR04,HP00,IDCF,INLFC,IX00,LLP2,LP01,ME02,MI03,PF00,PI01,PK00,PS01,PSPRX4,PSPX4,PX00,QTFC,RFP2,SC05,SP01,SR07,ST01,SU01,TIM3,TM00,TR00,UTZW,WTAS,WXW2,WXW3,X001,X003,X007,X011,X014,X021,X025,X027,X028,X031,X037,X039,X043,YFCC,MDLS,CONL",
            color: null,
            tokens: [],
            state: "online",
            in_service: false,
            id_s: "2016457438912345",
            calendar_enabled: true,
            api_version: 5,
            backseat_token: null,
            backseat_token_updated_at: null,
        };
        return [dummyVehicle];
    }
}
