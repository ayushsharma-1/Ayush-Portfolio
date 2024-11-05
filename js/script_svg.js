$(document).ready(function() {
    const statusSvg = $('#status-svg');
    const statusText = $('#status-text');
    const rectElement = statusSvg.find('rect');
    const textElement = statusText.find('span');

    const stateData = {
      'online': {
        fill: "hsl(145, 65%, 39%)",
      },
      'idle': {
        fill: "hsl(40, 86%, 57%)",
      },
      'dnd': {
        fill: "hsl(359, 87%, 60%)",
      },
      'offline': {
        fill: "hsl(223, 6%, 53%)",
      }
    };

    const showState = state => {
        const stateInfo = stateData[state];
        textElement.text('Currently ' + state);
        rectElement.attr('mask', `url(#svg-mask-status-${state})`);
        rectElement.attr('fill', stateInfo.fill);
        
    };
    
    lanyard({
        userId: '498107368077262849',
        socket: true,
        onPresenceUpdate: (data) => showState(data.discord_status)
    });

    tippy(rectElement[0], {
      content: 'Discord status',
      theme: 'polar-night',
      placement: 'bottom',
      animation: 'scale',
    });
});