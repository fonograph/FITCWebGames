#define TWOPI 6.283185370717
#define MAX 0.0420

varying vec2 vTextureCoord; //The coordinates of the current pixel
uniform sampler2D uSampler; //The image data
uniform float time;

//const highp vec3 W = vec3(0.2125, 0.7154, 0.0721);
const highp vec3 W = vec3(1., 1., 1);

float map(float min, float max, float value) {
	return min + (max - min) * value;
}

void main()
{

    vec2 uv =  vTextureCoord.xy;
    vec4 color = texture2D(uSampler, uv);

    float range = MAX;
    vec2 trippyUv = vec2(uv.x + map(-range, range, smoothstep(0., 1., abs(fract(time * 0.320)*2.0-1.0))) * sin(uv.y * TWOPI), uv.y);
    vec4 trippyColor = texture2D(uSampler, trippyUv);


    float offset = MAX;
    vec2 redSamplePos = vec2(uv.x - offset, uv.y);
    vec2 blueSamplePos = vec2(uv.x + offset, uv.y);
    float redAmount = texture2D(uSampler,redSamplePos).r;
    float blueAmount = texture2D(uSampler, blueSamplePos).b;
    //color.xyz += vec3(2.6,2.6,2.6);

    color = vec4(redAmount, color.g, blueAmount, 1.0);
    float luminance = dot(color.rgb, W);
    //fragColor = trippyColor;
	gl_FragColor = mix(vec4(vec3(luminance), 1.0), trippyColor, .6);
}