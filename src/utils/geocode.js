const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1Ijoiem9vdGVjaGRydW0iLCJhIjoiY2sxempuZm5uMHlzZjNjcW9ycnk1MmxlOSJ9._p2DgJbnQSzpFa7GmlWkOQ'

    //'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoiem9vdGVjaGRydW0iLCJhIjoiY2sxempuZm5uMHlzZjNjcW9ycnk1MmxlOSJ9._p2DgJbnQSzpFa7GmlWkOQ'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0]
            })
        }
    })
}

module.exports = geocode