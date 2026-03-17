var APP_DATA = {
  "scenes": [
    {
      "id": "0-aguas-arriba",
      "name": "AGUAS ARRIBA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.33133491470110243,
        "pitch": 1.4283845706461662,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.1154469667867879,
          "pitch": 0.4716392121168571,
          "rotation": 0,
          "target": "1-aguas-abajo"
        },
        {
          "yaw": -1.5805050809245422,
          "pitch": 1.1396231600824809,
          "rotation": 0,
          "target": "2-zona-de-actuacin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-aguas-abajo",
      "name": "AGUAS ABAJO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.819865988171874,
          "pitch": 0.5260287727239614,
          "rotation": 0,
          "target": "2-zona-de-actuacin"
        },
        {
          "yaw": 3.0117648653725677,
          "pitch": 0.2926826504026181,
          "rotation": 0,
          "target": "0-aguas-arriba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-zona-de-actuacin",
      "name": "ZONA DE ACTUACIÓN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9169869271148148,
          "pitch": -0.16349582198085244,
          "rotation": 0,
          "target": "0-aguas-arriba"
        },
        {
          "yaw": -0.4679423066981876,
          "pitch": -0.4119226907272928,
          "rotation": 0,
          "target": "1-aguas-abajo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "OBRA EMERGENCIA NERVA - 16/03/26",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
