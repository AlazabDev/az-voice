// AzVoice - ElevenLabs Conversation Token (WebRTC)
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const ELEVENLABS_API_KEY = Deno.env.get('ELEVENLABS_API_KEY');
    const ELEVENLABS_AGENT_ID = Deno.env.get('ELEVENLABS_AGENT_ID');

    if (!ELEVENLABS_API_KEY) throw new Error('ELEVENLABS_API_KEY is not configured');
    if (!ELEVENLABS_AGENT_ID) throw new Error('ELEVENLABS_AGENT_ID is not configured');

    const response = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation/token?agent_id=${ELEVENLABS_AGENT_ID}`,
      { headers: { 'xi-api-key': ELEVENLABS_API_KEY } }
    );

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`ElevenLabs token request failed [${response.status}]: ${err}`);
    }

    const { token } = await response.json();
    return new Response(
      JSON.stringify({ token, agentId: ELEVENLABS_AGENT_ID }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('elevenlabs-token error:', message);
    return new Response(
      JSON.stringify({ error: message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
