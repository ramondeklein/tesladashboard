import { VinInfoPartDecoderBuildPhase } from "./vininfopartdecoderbuildphase";
import { VinInfoPartDecoderCheckDigit } from "./vininfopartdecodercheckdigit";
import { VinInfoPartDecoder, VinInfoPartDecoderDefault } from "./vininfopartdecoderdefault";
import { VinInfoPartDecoderModelYear } from "./vininfopartdecodermodelyear";
import { VinInfoPartDecoderOptions } from "./vininfopartdecoderoptions";

// Based on the work of https://teslatap.com/vin-decoder and the specs listed below:
//
// 2013 (Model S) -     https://vpic.nhtsa.dot.gov/mid/home/displayfile/5df993c3-03ab-485a-9895-7094402f40aa
// 2014 (Model S) -     https://vpic.nhtsa.dot.gov/mid/home/displayfile/54ed893e-138e-401d-b569-c4d5fdf3d566
// 2015 (Model S) -     https://vpic.nhtsa.dot.gov/mid/home/displayfile/7aef9e63-e131-44dc-ba44-5399564da908
// 2015+ (Model S) -    ftp://ftp.nhtsa.dot.gov/mfrmail/ORG11229.pdf
// 2016 (Model X) -     https://vpic.nhtsa.dot.gov/mid/home/displayfile/f26a7663-e3e9-4813-ac95-9cdf2b3fff21
// 2017 (Model S) -     https://vpic.nhtsa.dot.gov/mid/home/displayfile/eed8a05c-0ca8-4180-993e-ee34ddb54e5e
// 2017 (Model X) -     https://vpic.nhtsa.dot.gov/mid/home/displayfile/9179e681-f10b-4823-96cf-79d43cbf7093
// 2017 (Model S/X/3) - https://vpic.nhtsa.dot.gov/mid/home/displayfile/90a46d61-2136-47e9-ad73-c563172908fe
// 2018 (Model S/X/3) - https://vpic.nhtsa.dot.gov/mid/home/displayfile/9d71d5c8-a6ff-45de-88ae-8ea1da8dd324

export const vinPartsNew: VinInfoPartDecoder[] = [
    new VinInfoPartDecoderOptions(0, 3, "Manufacturer", { "5YJ": "Tesla Motors, Inc." }),
    new VinInfoPartDecoderOptions(3, 1, "Make", {
        3: "Model 3",
        S: "Model S",
        X: "Model X",
    }),
    new VinInfoPartDecoderOptions(4, 1, "Body Type", {
        A: "5 Door Hatchback (Left Hand Drive)",
        B: "5 Door Hatchback (Right Hand Drive)",
        C: "Class E (6001-7000 lbs) GVWR / MPV / 5 Door (Left Hand Drive)",
        D: "Class E (6001-7000 lbs) GVWR / MPV / 5 Door (Right Hand Drive)",
        E: "Sedan 4 Door (Left Hand Drive)",
    }),
    new VinInfoPartDecoderOptions(5, 1, "Restraint System", {
        1: "Type 2 manual seatbelts (Front, Rear*3) with front airbags, PODS, side inflatable restraints, knee airbags (FR)",
        3: "Type 2 manual seatbelts (Front, Rear*2) with front airbags, side inflatable restraints, knee airbags (FR)",
        4: "Type 2 manual seatbelts (Front, Rear*3) with front airbags, side inflatable restraints, knee airbags (FR)",
        6: "Type 2 manual seatbelts (Front, Rear*3) with Front airbags, side inflatable restraints",
        7: "Type 2 manual seatbelts (Front, Rear*3) with Front airbags, side inflatable restraints & active hood",
        8: "Type 2 manual seatbelts (Front, Rear*2) with Front airbags, side inflatable restraints & active hood",
        A: "Type 2 manual seatbelts (Front Row, Center Row*3, Third Row*2) with front airbags, PODS, side inflatable restraints, knee airbags (FR)",
        B: "Type 2 manual seatbelts (Front Row, Center Row*2, Third Row*2) with front airbags, PODS, side inflatable restraints, knee airbags (FR)",
        C: "Type 2 manual seatbelts (Front Row, Center Row*2, Third Row*2) with front airbags, PODS, side inflatable restraints",
        D: "Type 2 manual seatbelts (Front, Rear*3) with front airbags, PODS, side inflatable restraints, knee airbags (FR)",
    }),
    new VinInfoPartDecoderOptions(6, 1, "Battery Type", {
        A: "10kW charger",                            // 2013
        B: "20kW charger with DC fast charge",        // 2013
        C: "10kW charger",                            // 2013
        D: "20kW charger with DC fast charge",        // 2013
        H: "Lithium Ion Battery - High capacity",
        S: "Lithium Ion Battery - Standard capacity",
        E: "Lithium Ion Battery - Electric",
    }),
    new VinInfoPartDecoderOptions(7, 1, "Motor/Drive Unit and Battery", {
        1: "Single Motor (standard)",     // Model S
        3: "Single Motor (performance)",  // Model S
        2: "Dual Motor (standard)",       // Model S / Model X
        4: "Dual Motor (performance)",    // Model S / Model X
        A: "Single Motor (standard)",     // Model 3
        B: "Dual Motor (standard)",       // Model 3
        C: "Base A/C Motor, Tier 2 Battery (31-40 kWh)",          // 2013
        G: "Base A/C Motor, Tier 4 Battery (51-60 kWh)",          // 2013
        N: "Base A/C Motor, Tier 7 Battery (81-90 kWh)",          // 2013
        P: "Performance A/C Motor, Tier 7 Battery (81-90 kWh)",   // 2013
    }),
    new VinInfoPartDecoderCheckDigit(8, 1, "Check digit"),
    new VinInfoPartDecoderModelYear(9, 1, "Model Year"),
    new VinInfoPartDecoderOptions(10, 1, "Location of Manufacture", {
        1: "Menlo Park, CA, USA",
        3: "Hethel, UK",
        F: "Fremont, CA, USA",
        P: "Palo Alto, CA, USA",
    }),
    new VinInfoPartDecoderBuildPhase(11, 1, "Build Phase Code"),
    new VinInfoPartDecoderDefault(11, 6, "Serial Number Digits"),
];
