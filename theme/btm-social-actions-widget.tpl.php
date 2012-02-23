<?php

/*
 * HTML for BTM Social Actions Widget
 */
?>
<div id="btm_social_actions" class="social container <?php print $variables['settings']['position']; ?>">
    
    <?php if($variables['settings']['facebook']) : ?>
    
        <div id="facebook" class="action wrapper <?php print $variables['settings']['display']; ?>">
            <div id="fb-root"></div>
            <fb:like layout="<?php print $variables['settings']['facebook_pos']; ?>" send="false" width="6" show_faces="false" href="<?php print $variables['settings']['canonical']; ?>" />
        </div>
    
    <?php endif; ?>
    
    <?php if($variables['settings']['twitter']) : ?>
    
        <div id="twitter" class="action wrapper <?php print $variables['settings']['display']; ?>">
            <a href="<?php print $variables['settings']['canonical']; ?>" data-count="<?php print $variables['settings']['twitter_pos']; ?>" data-url="<?php print $variables['settings']['canonical']; ?>" class="twitter-share-button">Tweet</a>
        </div>
    
    <?php endif; ?>
    
    
    <?php if($variables['settings']['plus_one']) : ?>
    
        <div id="plus_one" class="action wrapper <?php print $variables['settings']['display']; ?>">
            <g:plusone size="<?php print $variables['settings']['plusone_pos']; ?>" href="<?php print $variables['settings']['canonical']; ?>"></g:plusone>
        </div>
    
    <?php endif; ?>
    
</div>

