#version 330

// The camera's position in world-space
uniform vec3 u_cam_pos;

// Color
uniform vec4 u_color;

// Properties of the single point light
uniform vec3 u_light_pos;
uniform vec3 u_light_intensity;

// We also get the uniform texture we want to use.
uniform sampler2D u_texture_1;

// These are the inputs which are the outputs of the vertex shader.
in vec4 v_position;
in vec4 v_normal;

// This is where the final pixel color is output.
// Here, we are only interested in the first 3 dimensions (xyz).
// The 4th entry in this vector is for "alpha blending" which we
// do not require you to know about. For now, just set the alpha
// to 1.
out vec4 out_color;

void main() {
  // YOUR CODE HERE
  
  vec3 kd = vec3(1., 1., 1.);
  vec3 light = u_light_pos - v_position.xyz;
  vec3 l = normalize(light);
  float radius = length(light);
  float rad2 = radius * radius;
  vec3 color = kd * u_light_intensity / rad2 * max(0., dot(v_normal.xyz, l));
  out_color = vec4(color, 0.0);
  out_color.a = 1.0;
}
