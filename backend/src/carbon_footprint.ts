import request, { FormData } from 'then-request';

export const getCarbonFootprint = (dest: String) => {
  return request('GET', 'https://sustainabletravel.org/wp-admin/admin-ajax.php?action=get_airports_by_name' +
    `&search_data=${dest}`)
    .getBody('utf-8')
    .then(JSON.parse)
    .then((value) => {
      const airportId = (Object.values(value.response)[0] as any)[0].id;

      return request('GET', 'https://sustainabletravel.org/wp-admin/admin-ajax.php?action=' +
        'calculate_ajax&travel_type=plane&trip_type=single&flight_type=2&passenger_count=2&single_trip_type=round-trip&' +
        `location_from=%5B%223652%22%5D&location_to=%5B%22${airportId}%22%5D`)
        .getBody('utf-8')
        .then(JSON.parse)
    });
};  