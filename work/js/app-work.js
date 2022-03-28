

const iceServers = [
    {
        urls: "stun:openrelay.metered.ca:80"
    },
    {
        urls: "turn:openrelay.metered.ca:80?transport=tcp",
        username: "openrelayproject",
        credential: "openrelayproject",
    },
    {
        urls: "turn:openrelay.metered.ca:443?transport=tcp",
        username: "openrelayproject",
        credential: "openrelayproject",
    }
];

export function appWork() {
    console.log('appWork');
    console.log('isWebrtcSupported', Janus.isWebrtcSupported());
}



