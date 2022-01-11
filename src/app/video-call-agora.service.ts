import { Injectable } from "@angular/core";
import AgoraRTC, { IAgoraRTCClient } from "agora-rtc-sdk-ng";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class VideoCallAgora {

    // client: IAgoraRTCClient;

    constructor() {
        
    }

    init(){
        const client = AgoraRTC.createClient({ codec: 'h264', mode: 'rtc' });
        client.join(
            environment.appId,
            environment.channelName,
            environment.token,
            0
        );
    }
}