import React from "react";
import './Intro.css'
import Alpaca from "../Alpaca/Alpaca";
import { Anchor, Row, Col } from 'antd';


const Intro = () => {
    return(
        <div className="main-content">
            <div className="Intro">
                <h1 className="intro-name">
                    <pre className="intro-text">
                        Junyu (Eric) Li           李骏宇
                    </pre>
                </h1>
                <div id="alpaca-intro">
                    <div className="alpaca-pic">
                        <Alpaca />
                    </div>
                    <div className="alpaca-text">
                        Hi! My name is Junyu (pronounced as jyun-yu Li). You can also call me Eric.
                        Besides, my friends called me "alpaca" starting from my primary school, and the nickname has been with me ever since.<br />
                        I am currently a third-year student majored in Electrical and Computer Engineering at University of Toronto.
    
                    </div>
                </div>

                <div id="hobbies">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida rutrum quisque non tellus orci ac. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Aliquet enim tortor at auctor urna nunc id. Ante metus dictum at tempor commodo ullamcorper a lacus. Quis vel eros donec ac odio. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Massa tempor nec feugiat nisl pretium fusce id velit ut. Bibendum neque egestas congue quisque egestas diam in arcu. Netus et malesuada fames ac turpis egestas maecenas. Nisl purus in mollis nunc sed id semper. Sem fringilla ut morbi tincidunt augue. At tellus at urna condimentum.

Viverra suspendisse potenti nullam ac tortor vitae purus. Dui vivamus arcu felis bibendum ut tristique. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Sit amet volutpat consequat mauris nunc congue nisi vitae. Donec adipiscing tristique risus nec feugiat. Neque volutpat ac tincidunt vitae semper quis lectus. Platea dictumst vestibulum rhoncus est pellentesque. Sodales neque sodales ut etiam sit amet nisl purus in. Vel pretium lectus quam id leo in vitae. Venenatis tellus in metus vulputate eu. Porttitor rhoncus dolor purus non. Et leo duis ut diam quam nulla porttitor. Quis auctor elit sed vulputate mi sit amet mauris. Sed enim ut sem viverra aliquet eget. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Accumsan tortor posuere ac ut consequat semper. Lectus arcu bibendum at varius vel pharetra. Eu augue ut lectus arcu. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Arcu bibendum at varius vel pharetra vel turpis nunc.

Turpis egestas maecenas pharetra convallis posuere morbi leo. Mattis aliquam faucibus purus in. Montes nascetur ridiculus mus mauris vitae ultricies. Arcu ac tortor dignissim convallis aenean. Arcu bibendum at varius vel pharetra vel turpis. Amet commodo nulla facilisi nullam vehicula ipsum a. Libero nunc consequat interdum varius. Ultrices tincidunt arcu non sodales neque sodales ut. Sed augue lacus viverra vitae congue eu consequat ac felis. Consectetur lorem donec massa sapien faucibus et molestie ac. Amet justo donec enim diam vulputate. Elit at imperdiet dui accumsan sit amet. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.

Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Leo integer malesuada nunc vel risus commodo viverra. Luctus accumsan tortor posuere ac. Purus ut faucibus pulvinar elementum integer enim neque. Euismod in pellentesque massa placerat duis ultricies. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Arcu non sodales neque sodales ut etiam sit amet. Magnis dis parturient montes nascetur ridiculus. Potenti nullam ac tortor vitae. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ac auctor augue mauris augue neque gravida. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.
                
Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Leo integer malesuada nunc vel risus commodo viverra. Luctus accumsan tortor posuere ac. Purus ut faucibus pulvinar elementum integer enim neque. Euismod in pellentesque massa placerat duis ultricies. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Arcu non sodales neque sodales ut etiam sit amet. Magnis dis parturient montes nascetur ridiculus. Potenti nullam ac tortor vitae. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ac auctor augue mauris augue neque gravida. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.

Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Leo integer malesuada nunc vel risus commodo viverra. Luctus accumsan tortor posuere ac. Purus ut faucibus pulvinar elementum integer enim neque. Euismod in pellentesque massa placerat duis ultricies. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Arcu non sodales neque sodales ut etiam sit amet. Magnis dis parturient montes nascetur ridiculus. Potenti nullam ac tortor vitae. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ac auctor augue mauris augue neque gravida. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.
                </div>


            </div>

            <div className="anchor-container">
                <Anchor
                    replace
                    className="anchor"
                    items={[
                        {
                            key: 'alpaca-intro',
                            href: '#alpaca-intro',
                            title: 'alpaca-intro'
                        },
                        {
                            key: 'hobbies',
                            href: '#hobbies',
                            title: 'hobbies'
                        }
                    ]}
                
                
                />


            </div>
        </div>
    )
}

export default Intro;