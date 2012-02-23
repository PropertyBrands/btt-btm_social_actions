<?php

/*
 * Configure variables for social actions display
 */

function template_preprocess_btm_social_actions_widget(&$variables) {


    //Include JS in the Footer
    drupal_add_js(BTM_SOCIAL_MODULE_PATH . '/js/BTM.social_actions.js', 'module', 'footer');
    drupal_add_css(BTM_SOCIAL_MODULE_PATH . '/theme/btm-social-actions-styles.css', 'module');

    //Figure out where to position the counts for the icons
    $count_position = $variables['settings']['position'];

    $display_settings = array(
        'facebook' => array(
            'top' => 'box_count', 
            'side' => 'button_count'
        ),
        'twitter' => array(
            'top' => 'vertical', 
            'side' => 'horizontal'
         ),
        'plusone' => array(
            'top' => 'tall', 
            'side' => 'medium'
        )
    );

    $facebook_position = $display_settings['facebook'][$count_position];
    $twitter_position = $display_settings['twitter'][$count_position];
    $plusone_position = $display_settings['plusone'][$count_position];

    //Lastly we figure out what the canonical version of the current page's URL
    //is. This ensures that the count never resets and we are sharing the right
    //URL on dynamically generated pages

    $url = $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
    $url_parts = explode('?', $url);
    $canonical_url = $url_parts[0];

    //Toss to $variables for render in the theme layer
    $variables['settings']['facebook_pos'] = $facebook_position;
    $variables['settings']['twitter_pos'] = $twitter_position;
    $variables['settings']['plusone_pos'] = $plusone_position;
    $variables['settings']['canonical'] = $canonical_url;
}
