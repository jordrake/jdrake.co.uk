---
layout: post
title: AngularJS and Resolve
---

There are tons of [great resources online](https://www.google.com/?q=angularjs+resolve) about the usage of resolve in 
AngularJS' router but if you aren't aware it is a way to pass additional dependencies into a controller:
  
{% highlight javascript %}
$routeProvider.when('/tv-guide', {
  templateUrl: 'partials/tv-guide.html',
  controller: 'TvGuideController',
  resolve: {
    channels: function(ChannelService) {
      return ChannelService.getChannels();
    }
  }
});
 
...
 
function TvGuideController($scope, channels) {
  $scope.channels = channels;
}
{% endhighlight %}
  
The real show-stealer with resolve though is that if any of the return values are promises, it will wait until they are 
resolved before the controller is instantiated. 

There are many advantages that this brings such as removing promise-based initialisation out of your controllers:

{% highlight javascript %}
//This is bad
function TvGuideController($scope, ChannelService) {
  ChannelService.getChannels().then(function (channels) {
    $scope.channels = channels;
  }
}
{% endhighlight %}

Assuming ChannelService.getChannels() makes a HTTP call to an API to list channels, you're having a user not only have
a page load but then waiting again to load the channels when on the page. Promises in your controller are fine; you may
have some interactions that don't require a new view or controller but still need some more data from an API however
I personally wouldn't mind a couple more hundred milliseconds on page load time to have it full of the initial data.