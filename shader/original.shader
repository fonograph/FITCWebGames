#define TWOPI 6.283185370717
#define MAX 0.0420

//const highp vec3 W = vec3(0.2125, 0.7154, 0.0721);
const highp vec3 W = vec3(1., 1., 1);

float map(float min, float max, float value) {
	return min + (max - min) * value;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{

    vec2 uv = fragCoord.xy / iResolution.xy;
    vec4 color = texture(iChannel0, uv);

    vec2 niMouse = iMouse.xy / iResolution.xy;

    float range = MAX;
    vec2 trippyUv = vec2(uv.x + map(-range, range, smoothstep(0., 1., abs(fract(iTime * 0.320)*2.0-1.0))) * sin(uv.y * TWOPI), uv.y);
    vec4 trippyColor = texture(iChannel0, trippyUv);


    float offset = MAX;
    vec2 redSamplePos = vec2(uv.x - offset, uv.y);
    vec2 blueSamplePos = vec2(uv.x + offset, uv.y);
    float redAmount = texture(iChannel0,redSamplePos).r;
    float blueAmount = texture(iChannel0, blueSamplePos).b;
    //color.xyz += vec3(2.6,2.6,2.6);

    color = vec4(redAmount, color.g, blueAmount, 1.0);
    float luminance = dot(color.rgb, W);
    //fragColor = trippyColor;
	fragColor = mix(vec4(vec3(luminance), 1.0), trippyColor, .6);
}