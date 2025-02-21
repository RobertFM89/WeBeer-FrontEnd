import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const PeriodicTable = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/beers/${id}`);
  };

  return (
    <div className="periodicTable">
      <h2>Periodic Table of Beer Styles</h2>
      <div className="aleLager">
        <div className="beer1" onClick={() => handleNavigate(1)}>
          <div>
            <p>1</p>
            <p>Berliner Weisse</p>
          </div>
          <div onClick={() => handleNavigate(4)}>
            <p>4</p>
            <p>Belgian White</p>
          </div>
          <div onClick={() => handleNavigate(7)}>
            <p>7</p>
            <p>American White</p>
          </div>
          <div onClick={() => handleNavigate(14)}>
            <p>14</p>
            <p>Weizenbier</p>
          </div>
          <div onClick={() => handleNavigate(27)}>
            <p>27</p>
            <p>Dunkelweizen</p>
          </div>
          <div onClick={() => handleNavigate(41)}>
            <p>41</p>
            <p>Weizenbock</p>
          </div>
        </div>
        <div className="beer2">
          <div onClick={() => handleNavigate(2)}>
            <p>2</p>
            <p>Lambic</p>
          </div>
          <div onClick={() => handleNavigate(5)}>
            <p>5</p>
            <p>Gueuze</p>
          </div>
          <div onClick={() => handleNavigate(8)}>
            <p>8</p>
            <p>Faro</p>
          </div>
          <div onClick={() => handleNavigate(15)}>
            <p>15</p>
            <p>Fruit Beer</p>
          </div>
          <div onClick={() => handleNavigate(28)}>
            <p>28</p>
            <p>Flanders Red</p>
          </div>
          <div onClick={() => handleNavigate(42)}>
            <p>42</p>
            <p>Oud Bruin</p>
          </div>
        </div>
        <div className="beer3">
          <div onClick={() => handleNavigate(3)}>
            <p>3</p>
            <p>Belgian Gold Ale</p>
          </div>
          <div onClick={() => handleNavigate(6)}>
            <p>6</p>
            <p>Triple</p>
          </div>
          <div onClick={() => handleNavigate(9)}>
            <p>9</p>
            <p>Saison</p>
          </div>
          <div onClick={() => handleNavigate(16)}>
            <p>16</p>
            <p>Belgian Pale Ale</p>
          </div>
          <div onClick={() => handleNavigate(29)}>
            <p>29</p>
            <p>Belgian Dark Ale</p>
          </div>
          <div onClick={() => handleNavigate(43)}>
            <p>43</p>
            <p>Dubbel</p>
          </div>
        </div>
        <div className="beer4">
          <div onClick={() => handleNavigate(10)}>
            <p>10</p>
            <p>Pale Ale</p>
          </div>
          <div onClick={() => handleNavigate(17)}>
            <p>17</p>
            <p>American Pale Ale</p>
          </div>
          <div onClick={() => handleNavigate(30)}>
            <p>30</p>
            <p>India Pale Ale</p>
          </div>
          <div onClick={() => handleNavigate(44)}>
            <p>44</p>
            <p>American Amber Ale</p>
          </div>
        </div>
        <div className="beer5">
          <div onClick={() => handleNavigate(18)}>
            <p>18</p>
            <p>Ordinary Bitter</p>
          </div>
          <div onClick={() => handleNavigate(31)}>
            <p>31</p>
            <p>Special Bitter</p>
          </div>
          <div onClick={() => handleNavigate(45)}>
            <p>45</p>
            <p>Extra Special Bitter</p>
          </div>
        </div>
        <div className="beer6">
          <div onClick={() => handleNavigate(19)}>
            <p>19</p>
            <p>Scottish Light 60</p>
          </div>
          <div onClick={() => handleNavigate(32)}>
            <p>32</p>
            <p>Scottish Heavy 70</p>
          </div>
          <div onClick={() => handleNavigate(46)}>
            <p>46</p>
            <p>Scottish Export 80</p>
          </div>
        </div>
        <div className="beer7">
          <div onClick={() => handleNavigate(20)}>
            <p>20</p>
            <p>English Mild</p>
          </div>
          <div onClick={() => handleNavigate(33)}>
            <p>33</p>
            <p>American Brown</p>
          </div>
          <div onClick={() => handleNavigate(47)}>
            <p>47</p>
            <p>English Brown</p>
          </div>
        </div>
        <div className="beer8">
          <div onClick={() => handleNavigate(34)}>
            <p>34</p>
            <p>Brown Porter</p>
          </div>
          <div onClick={() => handleNavigate(48)}>
            <p>48</p>
            <p>Robust Porter</p>
          </div>
        </div>
        <div className="beer9a">
          <div onClick={() => handleNavigate(21)}>
            <p>21</p>
            <p>Dry Stout</p>
          </div>
          <div onClick={() => handleNavigate(35)}>
            <p>35</p>
            <p>Sweet Stout</p>
          </div>
          <div onClick={() => handleNavigate(49)}>
            <p>49</p>
            <p>Oatmeal Stout</p>
          </div>
        </div>
        <div className="beer9b">
          <div onClick={() => handleNavigate(22)}>
            <p>22</p>
            <p>Foreign Extra Stout</p>
          </div>
          <div onClick={() => handleNavigate(36)}>
            <p>36</p>
            <p>Imperial Stout</p>
          </div>
          <div onClick={() => handleNavigate(50)}>
            <p>50</p>
            <p>Russian Imperial Stout</p>
          </div>
        </div>
        <div className="beer10">
          <div onClick={() => handleNavigate(23)}>
            <p>23</p>
            <p>German Pilsner</p>
          </div>
          <div onClick={() => handleNavigate(37)}>
            <p>37</p>
            <p>Bohemian Pilsner</p>
          </div>
          <div onClick={() => handleNavigate(51)}>
            <p>51</p>
            <p>American Pilsner</p>
          </div>
        </div>
        <div className="beer11">
          <div onClick={() => handleNavigate(11)}>
            <p>11</p>
            <p>American Lite</p>
          </div>
          <div onClick={() => handleNavigate(24)}>
            <p>24</p>
            <p>American Standard</p>
          </div>
          <div onClick={() => handleNavigate(38)}>
            <p>38</p>
            <p>American Premium</p>
          </div>
          <div onClick={() => handleNavigate(52)}>
            <p>52</p>
            <p>American Dark</p>
          </div>
        </div>
        <div className="beer12">
          <div onClick={() => handleNavigate(12)}>
            <p>12</p>
            <p>Munich Helles</p>
          </div>
          <div onClick={() => handleNavigate(25)}>
            <p>25</p>
            <p>Dortmunder</p>
          </div>
          <div onClick={() => handleNavigate(39)}>
            <p>39</p>
            <p>Munich Dunkel</p>
          </div>
          <div onClick={() => handleNavigate(53)}>
            <p>53</p>
            <p>Schwarzbier</p>
          </div>
        </div>
        <div className="beer13">
          <div onClick={() => handleNavigate(13)}>
            <p>13</p>
            <p>Helles Bock</p>
          </div>
          <div onClick={() => handleNavigate(26)}>
            <p>26</p>
            <p>Doppelbock</p>
          </div>
          <div onClick={() => handleNavigate(40)}>
            <p>40</p>
            <p>Traditional Bock</p>
          </div>
          <div onClick={() => handleNavigate(54)}>
            <p>54</p>
            <p>Eisbock</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="mixed">
        <div className="beer14" onClick={() => handleNavigate(55)}>
          <div>
            <p>55</p>
            <p>Kolsch</p>
          </div>
          <div onClick={() => handleNavigate(61)}>
            <p>61</p>
            <p>Altbier</p>
          </div>
        </div>
        <div className="beer15" onClick={() => handleNavigate(56)}>
          <div>
            <p>56</p>
            <p>Biere de Garde</p>
          </div>
        </div>
        <div className="beer16" onClick={() => handleNavigate(57)}>
          <div>
            <p>57</p>
            <p>Oktoberfest</p>
          </div>
          <div onClick={() => handleNavigate(62)}>
            <p>62</p>
            <p>Vienna</p>
          </div>
        </div>
        <div className="beer17" onClick={() => handleNavigate(58)}>
          <div>
            <p>58</p>
            <p>Cream Ale</p>
          </div>
          <div onClick={() => handleNavigate(63)}>
            <p>63</p>
            <p>Steam Beer</p>
          </div>
        </div>
        <div className="beer1819" onClick={() => handleNavigate(59)}>
          <div>
            <p>59</p>
            <p>Smoked Beer</p>
          </div>
          <div onClick={() => handleNavigate(64)}>
            <p>64</p>
            <p>Barleywine</p>
          </div>
        </div>
        <div className="beer20" onClick={() => handleNavigate(60)}>
          <div>
            <p>60</p>
            <p>English Old Ale</p>
          </div>
          <div onClick={() => handleNavigate(65)}>
            <p>65</p>
            <p>English Strong Ale</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeriodicTable;