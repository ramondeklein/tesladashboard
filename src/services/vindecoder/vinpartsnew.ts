import { VinInfoPartDecoder, VinInfoPartDecoderDefault, VinInfoPartDecoderOptions, VinInfoPartDecoderModelYear, VinInfoPartDecoderBuildPhase } from './internals';

export const vinPartsNew: VinInfoPartDecoder[] = [
    new VinInfoPartDecoderOptions(0, 3, 'Manufacturer', { '5YJ': 'Tesla Motors, Inc.' }),
    new VinInfoPartDecoderOptions(3, 1, 'Make', {
        '3': 'Model 3',
        'S': 'Model S',
        'X': 'Model X'
    }),
    new VinInfoPartDecoderOptions(4, 1, 'Body Type', {
        'A': '5 Door Hatchback (Left Hand Drive)',
        'B': '5 Door Hatchback (Right Hand Drive)',
        'C': 'Class E (6001-7000 lbs) GVWR / MPV /5 Door (Left Hand Drive)',
        'D': 'Class E (6001-7000 lbs) GVWR / MPV /5 Door (Right Hand Drive)',
        'E': 'Sedan 4 Door (Model 3, Left-Hand Drive)'
    }),
    new VinInfoPartDecoderOptions(5, 1, 'Restraint System', {
        '1': 'Manual Type 2 Seat Belts (Front, Rear*3) With Front Airbags, PODS, Side Inflatable Restraints, Knee Airbags (Front)',
        '3': 'Manual Type 2 Seat Belts (Front, Rear*2) With Front Airbags, Side Inflatable Restraints, Knee Airbags (FR)',
        '6': 'Manual Type 2 Seat Belts (Front, Rear*3) With Front Airbags, Side Inflatable Restraints',
        '7': 'Type 2 manual seatbelts (Front, Rear*3) with Front Airbags, Side Inflatable Restraints & Active Hood',
        '8': 'Type 2 manual seatbelts (Front, Rear*2) with Front Airbags, Side Inflatable Restraints & Active Hood',
        'A': 'Manual Type 2 Seat Belts (Front Row, Center Row*3, Third Row*2) With Front Airbags, PODS, Side Inflatable Restraints, Knee Airbags (Front)',
        'B': 'Manual Type 2 Seat Belts (Front Row, Center Row*2, Third Row*2) With Front Airbags, PODS, Side Inflatable Restraints',
        'C': 'Manual Type 2 Seat Belts (Front Row, Center Row*2, Third Row*2) With Front Airbags, PODS, Side Inflatable Restraints',
        'D': 'Manual Type 2 Seat Belts (Front Row, Center Row*3 With Front Airbags, PODS, Side Inflatable Restraints',
    }),
    new VinInfoPartDecoderOptions(6, 1, 'Battery Type', {
        'E': 'Lithium Ion Battery - Electric'
    }),
    new VinInfoPartDecoderOptions(7, 1, 'Motor/Drive Unit and Battery', {
        '1': 'Single Motor - Three Phase A/C Induction',
        '2': 'Dual Motor - Three Phase A/C Induction',
        '3': 'Performance Single Motor - Three Phase A/C Induction',
        '4': 'Performance Dual Motor - Three Phase A/C Induction',
        'C': 'Base A/C Motor, Tier 2 Battery (31-40 kWh)',
        'G': 'Base A/C Motor, Tier 4 Battery (51-60 kWh)',
        'N': 'Base A/C Motor, Tier 7 Battery (81-90 kWh)',
        'P': 'Performance A/C Motor, Tier 7 Battery (81-90 kWh)'
    }),
    new VinInfoPartDecoderDefault(8, 1, 'Check character'),
    new VinInfoPartDecoderModelYear(9, 1, 'Model Year'),
    new VinInfoPartDecoderOptions(10, 1, 'Location of Manufacture', {
        '1': 'Menlo Park, CA, USA',
        '3': 'Hethel, UK',
        'F': 'Fremont, CA, USA',
        'P': 'Palo Alto, CA, USA'
    }),
    new VinInfoPartDecoderBuildPhase(11, 1, 'Build Phase Code'),
    new VinInfoPartDecoderDefault(11, 6, 'Serial Number Digits')
];
