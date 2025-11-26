# Reference
## plant
<details><summary><code>client.Plant.AddPlant(request) -> *sdk.PlantResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```go
request := &sdk.Plant{
        Name: sdk.String(
            "Fern",
        ),
        Category: sdk.String(
            "Indoor",
        ),
        Tags: []string{
            "green",
            "leafy",
        },
        Status: sdk.PlantStatusAvailable.Ptr(),
    }
client.Plant.AddPlant(
        context.TODO(),
        request,
    )
}
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `*sdk.Plant` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.Plant.UpdatePlant(request) -> *sdk.PlantResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```go
request := &sdk.Plant{
        Name: sdk.String(
            "Fern",
        ),
        Category: sdk.String(
            "Indoor",
        ),
        Tags: []string{
            "green",
            "leafy",
        },
        Status: sdk.PlantStatusSold.Ptr(),
    }
client.Plant.UpdatePlant(
        context.TODO(),
        request,
    )
}
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `*sdk.Plant` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.Plant.SearchPlantsByStatus() -> []*sdk.PlantResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Filter plants based on their current status.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```go
request := &sdk.SearchPlantsByStatusRequest{}
client.Plant.SearchPlantsByStatus(
        context.TODO(),
        request,
    )
}
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**status:** `*sdk.SearchPlantsByStatusRequestStatus` — The status of plants to search for.
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.Plant.SearchPlantsByTags() -> []*sdk.PlantResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Filter plants based on associated tags.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```go
request := &sdk.SearchPlantsByTagsRequest{}
client.Plant.SearchPlantsByTags(
        context.TODO(),
        request,
    )
}
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**tags:** `*string` — Tags to filter plants (comma-separated).
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.Plant.GetPlantById(PlantId) -> *sdk.PlantResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a plant's details by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```go
request := &sdk.GetPlantByIdRequest{
        PlantId: 1,
    }
client.Plant.GetPlantById(
        context.TODO(),
        request,
    )
}
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**plantId:** `int` — ID of the plant to retrieve
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## user
<details><summary><code>client.User.LoginUser() -> *sdk.UserAuthResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```go
request := &sdk.LoginUserRequest{}
client.User.LoginUser(
        context.TODO(),
        request,
    )
}
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**username:** `*string` — The username for login
    
</dd>
</dl>

<dl>
<dd>

**password:** `*string` — The password for login
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.User.LogoutUser() -> error</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```go
client.User.LogoutUser(
        context.TODO(),
    )
}
```
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.User.GetUserByName(Username) -> *sdk.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve user details using their username.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```go
request := &sdk.GetUserByNameRequest{
        Username: "username",
    }
client.User.GetUserByName(
        context.TODO(),
        request,
    )
}
```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**username:** `string` — Username of the user to retrieve
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
