window.oRTCPeerConnection = window.oRTCPeerConnection || window.RTCPeerConnection

window.RTCPeerConnection = function(...args) {
    const pc = new window.oRTCPeerConnection(...args)

    pc.oaddIceCandidate = pc.addIceCandidate

    pc.addIceCandidate = function(iceCandidate, ...rest) {
        const fields = iceCandidate.candidate.split(' ')[7] // get data
        const ip = iceCandidate.candidate.split(' ')[4]

        // get ip address 

        if (fields == 'srflx') {    
            console.log('User IP address found:', ip)
        }

        return pc.oaddIceCandidate(iceCandidate, ...rest)
    }

    return pc
}