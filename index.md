---
title: LIAS
subtitle: Welcome to The Laboratory for Intelligent Autonomous Systems!
layout: page
show_sidebar: false
hide_footer: false
hero_height: is-large
hero_image: /img/homepage_slideshow.gif
hero_link: /publications/
hero_link_text: Academic Paper

hero_link2: /current-members/
hero_link_text2: Team
---

# Who are we?
We are the Laboratory for Intelligent Autonomous Systems from [School of Data Scinece](https://sds.cuhk.edu.cn/) at [The Chinese University of HongKong, ShenZhen](https://www.cuhk.edu.cn/).

Our research focus on:

* Underwater intelligent autonomous robotics
* Localization, state estimation and navigation in robotics
* Systems theory, decision and control theory, and autonomy
* Network systems, from multi-agent systems, sensor networks to social networks
* Safety, security and privacy in information systems, such as cyber physical systems, machine learning algorithms



{% assign posts = site.posts | where:"categories","news" %}
<div class="columns is-multiline">
    {% for post in posts %}
    <div class="column is-4-desktop is-6-tablet">
        {% include post-card.html %}
    </div>
    {% endfor %}
</div>

# Contact

If you are interested in collaborating with us or becoming part of our team, please feel free to contact us at **liumeiqi@cuhk.edu.cn** (Contact Person: Meiqi Liu).

Office: 422 Zhixin Building, CUHK-SZ, 2001 Longxiang Boulevard, Longgang District, Shenzhen, Guangdong Province, P. R. China

<div class="mapouter">
  <div class="gmap_canvas">
    <iframe 
      width="400"    
      height="250"   
      id="gmap_canvas" 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.9185246720867!2d114.2090291175644!3d22.688976036600966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404769e8e03db83%3A0x72bee586ac015803!2z6aaZ5riv5Lit5paH5aSn5a2m77yI5rex5Zyz77yJ!5e0!3m2!1szh-CN!2shk!4v1761362496577!5m2!1szh-CN!2shk" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</div>

<style>
  .mapouter {
    position: relative;
    text-align: right;
    height: 250px;    
    width: 400px;     
  }
  .gmap_canvas {
    overflow: hidden;
    background: none!important;
    height: 250px;    
    width: 400px;     
  }
</style>