import { VinInfoPartDecoder, VinInfoPartDecoderDefault, VinInfoPartDecoderOptions, VinInfoPartDecoderModelYear, VinInfoPartDecoderBuildPhase } from './internals';

export const vinPartsOld: VinInfoPartDecoder[] = [
    new VinInfoPartDecoderOptions(0, 3, 'Manufacturer', {
        '5YJ': 'Tesla Motors, Inc.',
        'SFZ': 'Tesla Motors (fully assembed in UK)'
    }),
    new VinInfoPartDecoderOptions(3, 1, 'Make', {
        'R': 'Roadster'
    }),
    new VinInfoPartDecoderOptions(4, 1, 'Body Type', {
        'E': 'Convertible (Roadster)'
    }),
    new VinInfoPartDecoderOptions(5, 1, 'Region and Drive Position', {
        '1': 'USA (LHD)',
        '2': 'Europe (LHD)',
        '3': 'Europe (RHD)',
        '6': 'Canada (LHD)',
        '8': 'Hong Kong (RHD)',
    }),
    new VinInfoPartDecoderOptions(6, 1, 'Restraint System', {
        '1': 'Type 2 USA Seat Belts, Dual Airbags',
        'A': 'Type 2 USA Seat Belts, Dual Airbags',
        'B': 'Non-USA'
    }),
    new VinInfoPartDecoderOptions(7, 1, 'Motor/Drive Unit', {
        '1': 'Tesla M6B Motor',
        '3': 'Tesla M6S Motor',
        'B': 'Tesla 56C Motor'
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